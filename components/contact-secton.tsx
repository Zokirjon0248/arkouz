"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

export const ContactSection = React.memo(() => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const isValidUzPhone = (phone: string) => {
    // +998 bilan yoki faqat 9 ta raqam
    const uzbekRegex = /^(\+998\d{9}|\d{9})$/
    return uzbekRegex.test(phone)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidUzPhone(phone)) {
      setStatus("⚠️ Telefon raqam noto‘g‘ri formatda")
      return
    }

    // Agar faqat 9 ta raqam kiritsa -> avtomatik +998 qo‘shib yuboramiz
    let formattedPhone = phone
    if (/^\d{9}$/.test(phone)) {
      formattedPhone = `+998${phone}`
    }

    setStatus("Yuborilmoqda...")

    try {
      const token = "8167130609:AAGEHbrCXpCw81o9ZFwuR7QKH0N97LOqfBI"
      const chatId = "-1003071068197"

      const text = `📩 Yangi xabar [sayt-2]:\n\n👤 Ism: ${name}\n📞 Telefon: ${formattedPhone}\n💬 Xabar: ${message}`

      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      })

      if (res.ok) {
        setStatus("✅ Xabar yuborildi!")
        setName("")
        setPhone("")
        setMessage("")
      } else {
        setStatus("❌ Xatolik yuz berdi")
      }
    } catch (err) {
      setStatus("⚠️ Serverga ulanishda muammo")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Loyihangizni Muhokama Qilamiz</h2>
          <p className="text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed px-4">
            Arxitektura va dizayn loyihalaringiz uchun professional maslahat va to'liq xizmat. G'oyalaringizni hayotga
            tatbiq etishda yordam beraman. Bepul konsultatsiya olish uchun bog'laning.
          </p>
        </div>

        {/* 🔹 FORM */}
        <div className="max-w-2xl mx-auto mb-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
          >
            <Input
              type="text"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Input
              type="tel"
              placeholder="+998901234567 yoki 901234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Textarea
              placeholder="Xabaringiz"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 resize-none"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl"
            >
              Yuborish
            </Button>
            {status && <p className="text-center text-sm">{status}</p>}
          </form>
        </div>

        {/* 🔹 Social buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-500 px-6 py-3 font-bold rounded-xl flex items-center gap-2"
              asChild
            >
              <a href="https://t.me/arx_dexium" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-xl group-hover:rotate-12 group-hover:scale-125 transition-transform" />
                <span className="relative z-10">Telegram</span>
              </a>
            </Button>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-black hover:bg-pink-500 hover:text-white transition-all duration-500 px-6 py-3 font-bold rounded-xl flex items-center gap-2"
              asChild
            >
              <a
                href="https://www.instagram.com/arx_dexium?utm_source=ig_web_button_share_sheet&igsh=MWRlbzY2d3Bza3cyaw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl group-hover:rotate-12 group-hover:scale-125 transition-transform" />
                <span className="relative z-10">Instagram</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
