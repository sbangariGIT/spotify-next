import React from 'react';
import { customGet, getAuthSession } from '@/utils/serverUtils';
import { redirect } from 'next/navigation';
import { getTracks } from '../../lib/actions';
import { parseTrackObjects } from '../../lib/utils';
import TrackTable from '@/components/TrackTable/TrackTable';

const tracks = async () => {
  const session = await getAuthSession();
  if (!session) {
    redirect('/login');
  }
  return (
    <div>
      <TrackTable />
    </div>
  );
};

export default tracks;
