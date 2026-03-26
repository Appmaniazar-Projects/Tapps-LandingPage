"use client"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FluidBackground } from "@/components/ui/fluid-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSendEmail = () => {
    const { name, email, subject, message } = formData
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.")
      return
    }

    // Create the email body with form data
    const emailBody = `Hi TAPPS Team,

${message}

---
From: ${name}
Email: ${email}`

    // Construct Gmail web URL with pre-filled data
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=water@tapps.app&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank')
  }

  return (
    <section id="contact">
      <FluidBackground variant="subtle">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Have questions about TAPPS? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:water@tapps.app" className="text-white/80 hover:text-white transition-colors">
                      water@tapps.app
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+270672488896" className="text-white/80 hover:text-white transition-colors">
                      +27 067 248 8896
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-white/70">
                    Fill out the form below and we'll open your email client with your message ready to send.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email</label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                      />
                    </div>

                    <Button
                      onClick={handleSendEmail}
                      className="w-full bg-white text-[#1973bb] hover:bg-white/90 transition-colors"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </FluidBackground>
    </section>
  )
}
