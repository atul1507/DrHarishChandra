import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="border border-[#3C2F2B] p-6">

      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#3C2F2B] mb-6">
        Contact Details
      </h2>

      {/* Gradient Card */}
      <div
        className="
          rounded-xl p-6
          w-full
          bg-gradient-to-br from-[#3C2F2B] to-[#e6ccbb]
          text-white
        "
      >
        <h3 className="text-2xl font-semibold mb-1">
          Dr. Harish Chandra
        </h3>

        <p className="text-sm text-[#f3e9e3] mb-4">
          Assistant Professor
        </p>

        <div className="space-y-1 text-sm text-[#f3e9e3] mb-6">
          <p>Department of Mathematics and Scientific Computing</p>
          <p>Madan Mohan Malaviya University of Technology</p>
          <p>Gorakhpur, Uttar Pradesh – 273010, India</p>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="bg-[#3C2F2B]/60 p-2 rounded-lg">
            <Phone size={18} />
          </div>
          <p className="text-sm">
            +91-9450565757; +91-9235501647
          </p>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="bg-[#3C2F2B]/60 p-2 rounded-lg">
            <Mail size={18} />
          </div>
          <p className="text-sm underline underline-offset-2">
            hcas@mmmut.ac.in; hc19856@gmail.com
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#3C2F2B]/60 p-2 rounded-lg">
            <MapPin size={18} />
          </div>
          <p className="text-sm">
            26°43′53.2″N 83°25′59.3″E
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
