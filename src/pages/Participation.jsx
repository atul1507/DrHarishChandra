const Participation = () => {
  const participations = [
    {
      title: "2nd National Symposium on Modern Trends in Differential Geometry and Mathematical modelling",
      date: "January 9-10, 2010",
      venue: "Department of Mathematics and Astronomy, Lucknow University, Lucknow",
      role: "Participant"
    },
    {
      title: "3rd National symposium on Modern Trends in Differential Geometry and Mathematical modelling",
      date: "January 5-16, 2011",
      venue: "Department of Mathematics and Astronomy, Lucknow University, Lucknow",
      role: "Participant"
    },
    {
      title: "National symposium on Application of various Techniques in Fluid Dynamics",
      date: "February 10-12, 2011",
      venue: "Deptt. of Mathematics, B.S.N.V. Post Graduate College, Lucknow",
      role: "Participant"
    },
    {
      title: "International Conference on Group Theory and Lie Theory (GT & Lt-2012)",
      date: "March 19-21, 2012",
      venue: "Harish Chandra Research Institute (HRI), Jhusi, Allahabad",
      role: "Participant"
    },
    {
      title: "State-level faculty interaction seminar",
      date: "June 8-9, 2015",
      venue: "HBTI, Kanpur",
      role: "Participant"
    },
    {
      title: "Three-day workshop on Energy Efficiency workshop on oil conservation",
      date: "August 22-24, 2015",
      venue: "Petroleum Conservation Research Association, Ministry of Petroleum and Natural Gas, Government of India, M.M.M. University of Technology, Gorakhpur",
      role: "Participant"
    },
    {
      title: "One day workshop on Green Energy for Sustainable Development: Role of Educational Institutions",
      date: "January 21, 2016",
      venue: "MMMUT, Gorakhpur",
      role: "Participant"
    },
    {
      title: "Three-day workshop on Hands-on Training Cum Workshop on Soft Computing Skill for Scientist and Engineer",
      date: "March 17-19, 2017",
      venue: "Department of Applied Science, MMMUT Gorakhpur",
      role: "Participant"
    },
    {
      title: "1st Malaviya Research Conclave (MRC-2017)",
      date: "2017",
      venue: "MMMUT, Gorakhpur",
      role: "Participant"
    },
    {
      title: "Two-day workshop on Cyber Security and its Relevance in Digital India",
      date: "September 7-8, 2018",
      venue: "Department of Computer Science, MMM University of Technology, Gorakhpur",
      role: "Participant"
    }
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F9A825] mb-4 sm:mb-6">
        Participation
      </h1>

      <div className="bg-white rounded-lg border-2 border-[#F9C97C] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-[#F9C97C]">
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-black">S.No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-black">Event</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-black">Date</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-black">Venue</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-black">Role</th>
              </tr>
            </thead>
            <tbody>
              {participations.length > 0 ? (
                participations.map((participation, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{index + 1}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{participation.title}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{participation.date}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{participation.venue}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{participation.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-3 sm:px-4 py-8 text-center text-gray-500">
                    No participation records added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Participation;
