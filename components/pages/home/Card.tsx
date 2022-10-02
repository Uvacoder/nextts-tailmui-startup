import { CSH2 } from '@styles/common/typography';
import Link from 'next/link';
import React from 'react';

interface Props {
    icon: any,
    title: string,
    color: string,
    url: string
}

const Card = ({ icon: Icon, title, color, url }: Props) => {
    return <Link href={url} passHref>
        <div className={`card cursor-pointer ${color}`}>
            <div className="text-center space-y-3">
                <Icon sx={{ fontSize: '30px' }} />
                <CSH2>{title}</CSH2>
            </div>
        </div>
    </Link>
};

export default Card;
