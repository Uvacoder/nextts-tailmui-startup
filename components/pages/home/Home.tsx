import React, { Fragment } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import { url_addMedicine, url_availableMedicine, url_history, url_purchaseMedicine, url_saleMedicine, url_showMedicine } from '@utils/paths';
import Card from './Card';
import TopSection from './TopSection';
import { SGrid } from '@styles/home/home'
import { CSContainer } from '@styles/common/common';

const cards = [
    {
        color: 'bg-green-200',
        url: url_addMedicine,
        title: 'Add Medicine',
        icon: AddIcon
    },
    {
        color: 'bg-blue-200',
        url: url_showMedicine,
        title: 'Show Medicine',
        icon: SummarizeOutlinedIcon
    },
    {
        color: 'bg-orange-200',
        url: url_purchaseMedicine,
        title: 'Purchase Medicine',
        icon: FactCheckOutlinedIcon
    },
    {
        color: 'bg-lime-200',
        url: url_saleMedicine,
        title: 'Sale Medicine',
        icon: ReceiptOutlinedIcon
    },
    {
        color: 'bg-pink-200',
        url: url_availableMedicine,
        title: 'Available Medicine',
        icon: FeaturedPlayListOutlinedIcon
    },
    {
        color: 'bg-red-200',
        url: url_history,
        title: 'History',
        icon: RestoreOutlinedIcon
    },
]

const Home = () => {

    return <CSContainer>
        <TopSection />
        <SGrid>
            {cards.map(card => (
                <Fragment key={card.title}>
                    <Card color={card.color} icon={card.icon} url={card.url} title={card.title} />
                </Fragment>
            ))}
        </SGrid>
    </CSContainer>;
};

export default Home;
