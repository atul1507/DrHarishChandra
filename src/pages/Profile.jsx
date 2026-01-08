const Profile = () => {
  return (
    <div className="border border-[#3C2F2B] p-6">

      {/* Academic Background */}
      <section>
        <h2 className="text-3xl font-semibold text-[#3C2F2B]">
          Academic Background
        </h2>
        <hr className="my-3 border-[#3C2F2B]" />

        <table className="w-full border-collapse text-gray-600">
          <thead>
            <tr className="text-left font-semibold border-b border-[#3C2F2B] text-[#3C2F2B]">
              <th className="py-2">Degree</th>
              <th className="py-2">Institute of Study</th>
              <th className="py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ph.D. (Mathematics)", "University of Lucknow", "2013"],
              ["UGC–JRF (NET) Qualified", "UGC", "2007"],
              ["M.Sc.", "University of Lucknow", "2007"],
              ["RBS–M MATE Fellowship", "RBS Foundation", "2006"],
              ["B.Sc.", "University of Lucknow", "2005"],
              ["Intermediate", "U.P. Board", "2002"],
              ["High School", "U.P. Board", "2000"],
            ].map((row, i) => (
              <tr key={i} className="border-t border-[#3C2F2B]">
                <td className="py-3">{row[0]}</td>
                <td className="py-3">{row[1]}</td>
                <td className="py-3">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Work Experience */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-[#3C2F2B]">
          Work Experience
        </h2>
        <hr className="my-3 border-[#3C2F2B]" />

        <table className="w-full border-collapse text-gray-600">
          <thead>
            <tr className="text-left font-semibold border-b border-[#3C2F2B] text-[#3C2F2B]">
              <th className="py-2 w-1/2">Position</th>
              <th className="py-2">Area</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Contractual Faculty", "Lucknow University (2007 – 2008)"],
              ["Guest Faculty (Under UGC Norms)", "Lucknow University (2008 – 2011)"],
              ["Senior Research Fellow", "BBD University, Lucknow (2012 – 2014)"],
              ["Assistant Professor, Dept. of Mathematics and Scientific Computing", "MMMUT, Gorakhpur (2015 – Present)"],
              ["Officer In Charge, Lawn Tennis", "MMMUT, Gorakhpur (2015 – 2017)"],
              ["Member, Library Affairs Committee", "MMMUT, Gorakhpur (2015)"],
              ["Deputy Officer-in-Charge, Timetable", "MMMUT, Gorakhpur (2015 – 2021)"],
              ["Assistant Centre Superintendent (Examinations)", "MMMUT, Gorakhpur (2016)"],
              ["Officer In Charge, Guest House", "MMMUT, Gorakhpur (2017)"],
              ["Joint Controller of Examination", "MMMUT, Gorakhpur (2017)"],
              ["Member, Steering Committee", "MMMUT, Gorakhpur (2017 – 2018)"],
              ["Warden, Tilak Hostel", "MMMUT, Gorakhpur (2017 – 2018)"],
              ["Member, Cultural Society", "MMMUT, Gorakhpur (2017 – 2020)"],
              ["Warden, Sarojini Hostel", "MMMUT, Gorakhpur (2017 – 2020)"],
              ["Member, Women’s Grievance Redressal Cell", "MMMUT, Gorakhpur (2017 – 2021)"],
              ["Member, ITRC Management Committee", "MMMUT, Gorakhpur (2017)"],
              ["Officer In Charge, Horticulture", "MMMUT, Gorakhpur (2020)"],
              ["Member Secretary, Campus Development Cell (CDC)", "MMMUT, Gorakhpur (2020)"],
              ["Officer In Charge, Cultural Sub-Council", "MMMUT, Gorakhpur (2020)"],
              ["Officer In Charge, Badminton", "MMMUT, Gorakhpur (2020)"],
              ["Warden, Tagore Hostel", "MMMUT, Gorakhpur (2020)"],
              ["Member, EDP Cell", "MMMUT, Gorakhpur (2021)"],
            ].map((row, i) => (
              <tr key={i} className="border-t border-[#3C2F2B]">
                <td className="py-4 pr-8">{row[0]}</td>
                <td className="py-4">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Profile;
