const Research = () => {
  return (
    <div className="border border-[#3C2F2B] p-6">

      {/* Page Title */}
      <h2 className="text-3xl font-semibold text-[#3C2F2B]">
        Research Projects
      </h2>
      <hr className="my-3 border-[#3C2F2B]" />

      <table className="w-full border-collapse text-gray-600">
        <tbody>

          {/* Project Title */}
          <tr className="border-t border-[#3C2F2B]">
            <td colSpan="2" className="py-4 font-semibold text-gray-700">
              Study of Derived Length and Nilpotency Class of Group Algebras
            </td>
          </tr>

          {/* Period */}
          <tr className="border-t border-[#3C2F2B]">
            <td className="py-3 w-1/4 font-semibold text-gray-600">
              Period
            </td>
            <td className="py-3">
              2017 – 2020
            </td>
          </tr>

          {/* Funding */}
          <tr className="border-t border-[#3C2F2B]">
            <td className="py-3 font-semibold text-gray-600">
              Funding
            </td>
            <td className="py-3">
              DST (SERB), New Delhi
            </td>
          </tr>

          {/* Amount */}
          <tr className="border-t border-[#3C2F2B]">
            <td className="py-3 font-semibold text-gray-600">
              Amount
            </td>
            <td className="py-3 text-[#3C2F2B] font-semibold">
              Rs. 5.45 Lac
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
};

export default Research;
