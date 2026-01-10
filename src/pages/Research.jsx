const Research = () => {
  return (
    <div className="border border-[#F9C97C] p-3 sm:p-4 md:p-6">

      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#F9A825]">
        Research Projects
      </h2>
      <hr className="my-3 border-[#F9C97C]" />

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full border-collapse text-black text-sm sm:text-base">
        <tbody>

          {/* Project Title */}
          <tr className="border-t border-[#F9C97C]">
            <td colSpan="2" className="py-4 font-semibold text-[#F9A825]">
              Study of Derived Length and Nilpotency Class of Group Algebras
            </td>
          </tr>

          {/* Period */}
          <tr className="border-t border-[#F9C97C]">
            <td className="py-3 w-1/4 font-semibold text-[#F9A825]">
              Period
            </td>
            <td className="py-3">
              2017 – 2020
            </td>
          </tr>

          {/* Funding */}
          <tr className="border-t border-[#F9C97C]">
            <td className="py-3 font-semibold text-[#F9A825]">
              Funding
            </td>
            <td className="py-3">
              DST (SERB), New Delhi
            </td>
          </tr>

          {/* Amount */}
          <tr className="border-t border-[#F9C97C]">
            <td className="py-3 font-semibold text-[#F9A825]">
              Amount
            </td>
            <td className="py-3 text-[#F9A825] font-semibold">
              Rs. 5.45 Lac
            </td>
          </tr>

        </tbody>
      </table>
      </div>

    </div>
  );
};

export default Research;
