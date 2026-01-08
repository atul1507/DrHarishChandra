const Achievements = () => {
  return (
    <div className="border border-[#3C2F2B] p-6">

      {/* ================= Scholarships & Fellowships ================= */}
      <h2 className="text-3xl font-semibold text-[#3C2F2B] mb-4">
        Scholarships & Fellowships
      </h2>

      <table className="w-full border-collapse text-gray-600 mb-10">
        <thead>
          <tr className="border-t border-b border-[#3C2F2B] font-semibold text-left text-[#3C2F2B]">
            <th className="py-3 w-40">Period</th>
            <th className="py-3">Title</th>
            <th className="py-3">Organization</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2010 – 2012</td>
            <td className="py-4 font-medium">Senior Research Fellow</td>
            <td className="py-4">University Grant Commission (UGC), India</td>
          </tr>

          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2008 – 2010</td>
            <td className="py-4 font-medium">Junior Research Fellow</td>
            <td className="py-4">University Grant Commission (UGC), India</td>
          </tr>

          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2006 – 2007</td>
            <td className="py-4 font-medium">RBS M Mate Fellow</td>
            <td className="py-4">Lucknow University</td>
          </tr>
        </tbody>
      </table>

      {/* ================= Qualifications ================= */}
      <h2 className="text-3xl font-semibold text-[#3C2F2B] mb-4">
        Qualifications
      </h2>

      <table className="w-full border-collapse text-gray-600 mb-10">
        <thead>
          <tr className="border-t border-b border-[#3C2F2B] font-semibold text-left text-[#3C2F2B]">
            <th className="py-3 w-40">Year</th>
            <th className="py-3">Qualification</th>
            <th className="py-3">Organization</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2007</td>
            <td className="py-4 font-medium">NET (JRF) – Mathematics</td>
            <td className="py-4">University Grant Commission (UGC), India</td>
          </tr>
        </tbody>
      </table>

      {/* ================= MOOC / AICTE Certifications ================= */}
      <h2 className="text-3xl font-semibold text-[#3C2F2B] mb-4">
        MOOC / AICTE Certifications
      </h2>

      <table className="w-full border-collapse text-gray-600">
        <thead>
          <tr className="border-t border-b border-[#3C2F2B] font-semibold text-left text-[#3C2F2B]">
            <th className="py-3 w-32">Year</th>
            <th className="py-3">Course Title</th>
            <th className="py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2020</td>
            <td className="py-4 font-medium">
              Mathematical Methods and its Application
            </td>
            <td className="py-4">
              12-week AICTE approved online course with Elite Certificate (SWAYAM)
            </td>
          </tr>

          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2019</td>
            <td className="py-4 font-medium">
              Introduction to Abstract and Linear Algebra
            </td>
            <td className="py-4">
              8-week AICTE approved online course with Elite Certificate (SWAYAM)
            </td>
          </tr>

          <tr className="border-b border-[#3C2F2B]">
            <td className="py-4">2019</td>
            <td className="py-4 font-medium">Modern Algebra</td>
            <td className="py-4">
              8-week AICTE approved online course with Elite Certificate (SWAYAM)
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Achievements;
