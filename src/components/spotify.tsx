import useSWR, {SWRResponse} from 'swr';
import Image from 'next/image';
import {LanyardData} from '../types/lanyardData';
import React from 'react';

export function Spotify() {
	const {data} = useLanyard();
	if (!data || !data.spotify) {
		return <div />;
	}

	return (
		<div className="grid grid-cols-2 spotify-grid">
			<div className="col-start-1 col-end-1">
				<Image
					src={data.spotify.album_art_url}
					className="album-image"
					height={100}
					width={100}
					quality={100}
					alt="album image"
				/>
			</div>
			<div className="grid grid-cols-1 col-start-2 col-end-2 grid-rows-2 pl-6">
				<div className="row-start-1 pt-4 pb-2 text-md">{data.spotify.song}</div>
				<div className="row-start-2 text-xs">{data.spotify.artist}</div>
			</div>
		</div>
	);
}

function useLanyard(): SWRResponse<LanyardData, Error> {
	return useSWR<LanyardData, Error>('/api/lanyard');
}
