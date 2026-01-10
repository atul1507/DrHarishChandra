const Teaching = () => {
  return (
    <div className="border border-[#F9C97C] p-3 sm:p-4 md:p-6">
      
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#F9A825] mb-4">
        Subjects Taught
      </h2>

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full border-collapse text-black text-sm sm:text-base">
          <tbody>
            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825] w-32 sm:w-40">BAS 01</td>
              <td className="py-3 sm:py-4">Engineering Mathematics I</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">BAS 07</td>
              <td className="py-3 sm:py-4">Engineering Mathematics II</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">BAS 23</td>
              <td className="py-3 sm:py-4">Engineering Mathematics IV</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">BAS 24</td>
              <td className="py-3 sm:py-4">Applied Computational Mathematics</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">BAS 29</td>
              <td className="py-3 sm:py-4">Numerical Methods</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">MAS 112</td>
              <td className="py-3 sm:py-4">Advanced Engineering Mathematics</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">MMS-102</td>
              <td className="py-3 sm:py-4">Linear Algebra and Matrix Theory</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">MMS-108</td>
              <td className="py-3 sm:py-4">Abstract Algebra</td>
            </tr>

            <tr className="border-b border-[#F9C97C]">
              <td className="py-3 sm:py-4 font-semibold text-[#F9A825]">MMS-202</td>
              <td className="py-3 sm:py-4">Theory of Computing</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Teaching;
