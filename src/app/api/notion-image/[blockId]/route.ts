import { isFullBlock } from '@notionhq/client';
import { notion } from '@/utils/notion';

// Notion's URLs for uploaded images expire after an hour, so posts link here
// and this redirects to a freshly signed URL
export const dynamic = 'force-dynamic';

const BLOCK_ID =
  /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i;

export async function GET(
  _request: Request,
  { params }: { params: { blockId: string } },
) {
  const { blockId } = params;
  if (!BLOCK_ID.test(blockId)) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const block = await notion.blocks.retrieve({ block_id: blockId });
    if (
      !isFullBlock(block) ||
      block.type !== 'image' ||
      block.image.type !== 'file'
    ) {
      return new Response('Not found', { status: 404 });
    }

    return new Response(null, {
      status: 307,
      headers: {
        Location: block.image.file.url,
        // Shorter than the signed URL's one-hour lifetime
        'Cache-Control': 'public, max-age=1800',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
