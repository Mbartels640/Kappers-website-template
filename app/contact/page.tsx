import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-cream-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center mb-16 text-charcoal-gray">
          Contact & Route
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="w-full h-96 md:h-full rounded-lg overflow-hidden border-4 border-soft-taupe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6367.411782877013!2d5.674355882097543!3d50.86026707962506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e83eb0aa70ed%3A0x7c46fbe08e6cb9fb!2sHair%20By%20Bo!5e0!3m2!1sen!2snl!4v1753481369944!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie van Hair by Bo in Maastricht"
            ></iframe>
          </div>
          <div className="space-y-8">
            <div className="bg-warm-beige p-8 rounded-lg border border-soft-taupe">
              <h2 className="text-2xl font-semibold mb-6 text-charcoal-gray">
                Gegevens
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Adres</h3>
                    <p className="text-charcoal-gray/80">
                      Schalmeistraat 51
                      <br />
                      6217 EV Maastricht, Nederland
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Telefoon</h3>
                    <a
                      href="tel:+31612345678"
                      className="text-charcoal-gray/80 hover:text-heritage-gold"
                    >
                      +31 (0)6 12 34 56 78
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a
                      href="mailto:info@hairbybo.nl"
                      className="text-charcoal-gray/80 hover:text-heritage-gold"
                    >
                      info@hairbybo.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-warm-beige p-8 rounded-lg border border-soft-taupe">
              <h2 className="text-2xl font-semibold mb-6 text-charcoal-gray flex items-center gap-3">
                <Clock className="w-6 h-6" /> Openingstijden
              </h2>
              <div className="space-y-2 text-charcoal-gray/80">
                <div className="flex justify-between">
                  <span>Maandag:</span> <span>Gesloten</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinsdag - Vrijdag:</span> <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaterdag:</span> <span>09:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zondag:</span> <span>Gesloten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
