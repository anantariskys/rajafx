import BrokerCard from '@/components/BrokerCard/BrokerCard'
import brokers from '@/data/brokers'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'

const Broker = () => {
  return (
    <SectionLayout title="Broker Pilihan Kami">
    <main className="flex justify-center flex-col md:flex-row gap-4 md:gap-8 md:pb-16">
      {brokers.map((item, index) => (
        <BrokerCard key={index} broker={item} />
      ))}
    </main>
  </SectionLayout>
  )
}

export default Broker
