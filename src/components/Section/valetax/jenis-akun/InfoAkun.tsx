import { Icon } from '@iconify/react/dist/iconify.js'
import React, { FC } from 'react'


interface AkunDetails {
  "Deposit Minimal": string;
  "Mata Uang Pasar": string;
  "Ukuran Kontrak": string;
  Spread: string;
  Komisi: string;
  "Leverage Maksimal": string;
  "Harga Call/Stop Out": string;
  "Instrumen Perdagangan": string;
}

interface Props {
  item: AkunDetails
}
const InfoAkun:FC<Props> = ({item}) => {
  return (
   <section className="container max-w-7xl w-full grid md:grid-cols-2 gap-y-8 gap-x-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'mynaui:download'}/>
            </div>
            <p className="text-[#6B6E73]">Deposit minimal</p>
          </div>
            <p className="text-[#6B6E73]">{item['Deposit Minimal']}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'iconoir:dollar'}/>
            </div>
            <p className="text-[#6B6E73]">Komisi</p>
          </div>
            <p className="text-[#6B6E73]">{item.Komisi}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'formkit:dollar'}/>
            </div>
            <p className="text-[#6B6E73]">Mata Uang Pasar</p>
          </div>
            <p className="text-[#6B6E73]">{item['Mata Uang Pasar']}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'mingcute:balance-line'}/>
            </div>
            <p className="text-[#6B6E73]">Leverage Maksimal</p>
          </div>
            <p className="text-[#6B6E73]">{item['Leverage Maksimal']}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'ion:document-outline'}/>
            </div>
            <p className="text-[#6B6E73]">Ukuran Kontrak</p>
          </div>
            <p className="text-[#6B6E73]">{item['Ukuran Kontrak']}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'material-symbols:speed-outline'}/>
            </div>
            <p className="text-[#6B6E73]">Margin Call / Stop Out</p>
          </div>
            <p className="text-[#6B6E73]">{item['Harga Call/Stop Out']}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'material-symbols:align-self-stretch-rounded'}/>
            </div>
            <p className="text-[#6B6E73]">Spread</p>
          </div>
            <p className="text-[#6B6E73]">{item.Spread}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-[#E9F9EF] text-[#25C660] rounded-full text-2xl">
            <Icon icon={'material-symbols:speed-outline'}/>
            </div>
            <p className="text-[#6B6E73]">Instumen Perdagangan</p>
          </div>
            <p className="text-[#6B6E73]">{item['Instrumen Perdagangan']}</p>
        </div>
      </section>
  )
}

export default InfoAkun
