import ShowMedicine from '@pages/showMedicine/ShowMedicine';
import Head from 'next/head';
import React from 'react';

const Index = () => {
    return <div>
        <Head>
            <title>Pharmacy | Show Medicine</title>
        </Head>
        <ShowMedicine />
    </div>
};

export default Index;
