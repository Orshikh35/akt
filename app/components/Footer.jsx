import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from 'lucide-react'
import Logo from "../home/_assets/AKT LOGO.png"

export default function Footer() {
  return (
  <div className="w-full bg-[#e8e8e8] flex justify-center items-center">
      <footer className="w-[1440px] pb-12 pt-16">
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
          <div>
            <Image 
              src={Logo.src} 
              alt="Logo" 
              width={60} 
              height={40}
              className="mb-6"
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Бидний тухай</h3>
            <nav className="flex flex-col space-y-3 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Танилцуулга</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Үнийн санал</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Хамтран ажиллах</h3>
            <nav className="flex flex-col space-y-3 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Байгууллага</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Гүйцэтгэгч</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Тусламж</h3>
            <nav className="flex flex-col space-y-3 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Түгээмэл асуултууд</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Хэрэглэх заавар</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg text-[#FF5533]">Холбоо барих</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>БГД, 26р хороо, Дүндгол гудамж, Уранган оффис, АКТ ЭМ ЭН ХХК оффис</p>
              <p>
                <span className="font-medium">Утас</span>: 88738030
              </p>
              <p>
                <span className="font-medium">Имэйл</span>: contact@akt.mn
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">2024 AKTMN LLC. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Нууцлалын бодлого
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Үйлчилгээний нөхцөл
            </Link>
            <Link href="#" className="text-[#FF5533] hover:text-[#FF5533]/90">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-[#FF5533] hover:text-[#FF5533]/90">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

