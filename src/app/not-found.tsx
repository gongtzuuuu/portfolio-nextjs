export const dynamic = 'force-dynamic';

import React from 'react';
import { redirect } from 'next/navigation';

export default function RootNotFound() {
  redirect(`/en/`);
}
