import { ArrowUpRight } from "lucide-react";

const Publications = () => {
  return (
    <div className="border border-[#3C2F2B] p-6">

      <h2 className="text-3xl font-semibold text-[#3C2F2B] mb-4">
        Publications
      </h2>

      <table className="w-full border-collapse text-[#3C2F2B]">
        <thead>
          <tr className="border-t border-b border-[#3C2F2B] font-semibold text-left">
            <th className="py-3 w-16">S. No.</th>
            <th className="py-3">Title</th>
            <th className="py-3 w-40 text-center">Year of Publication</th>
          </tr>
        </thead>

        <tbody>
          {[
            { id: 1, title: "A Robust Lattice-Based Post-Quantum Three-Party Key Exchange Scheme for Mobile Devices", year: 2025, link: "https://onlinelibrary.wiley.com/doi/10.1002/cpe.70036" },
            { id: 2, title: "CRYPTOGRAPHY BASED ON SAWI-ELZAKI TRANSFORM", year: 2025 },
            { id: 3, title: "Unit group of group algebras of non abelian group of order up to 30", year: 2025, link: "https://dx.doi.org/10.5269/bspm.76165" },
            { id: 4, title: "LB-RFID: Provably Secure Post-quantum Authentication Protocol for RFID Devices in Resource-constrained IoT Environment", year: 2025, link: "https://link.springer.com/article/10.1007/s11277-025-11847-8" },
            { id: 5, title: "Optimal control of malaria with medicine and insecticide: A mathematical model", year: 2025 },
            { id: 6, title: "Lightweight hybrid lattice-based session key agreement protocol for multimedia IoT", year: 2025, link: "https://link.springer.com/article/10.1007/s12243-025-01122-z" },
            { id: 7, title: "SIS-Based Signature Schemes and Their Countermeasures: From Vulnerability to Vigilance", year: 2025, link: "https://link.springer.com/chapter/10.1007/978-3-031-90587-2_1" },
            { id: 8, title: "Lattice-Based Authentication Scheme for Smart Agriculture System", year: 2025, link: "https://link.springer.com/chapter/10.1007/978-981-97-8051-8_12" },
            { id: 9, title: "A matrix technique-based numerical treatment of a nonlocal singular boundary value problems", year: 2025, link: "https://onlinelibrary.wiley.com/doi/10.1002/mma.9809" },
            { id: 10, title: "Blockchain based authentication and access control protocol for IoT", year: 2024, link: "https://link.springer.com/article/10.1007/s11042-023-17607-9" },
            { id: 11, title: "A New Public Key Cryptography Using Generalized Fibonacci Matrices", year: 2024 },
            { id: 12, title: "Post-quantum attack resilience blockchain-assisted data authentication protocol for smart healthcare system", year: 2024, link: "https://onlinelibrary.wiley.com/doi/10.1002/spe.3336" },
            { id: 13, title: "Network Malaria Model on Account of Wide Communication", year: 2024, link: "https://ieeexplore.ieee.org/document/10923044/" },
            { id: 14, title: "An encryption and decryption technique using planar graph with self-invertible matrix", year: 2024, link: "https://link.springer.com/article/10.1007/s10586-022-03955-y" },
            { id: 15, title: "Quantum-resistant public-key encryption and signature schemes with smaller key sizes", year: 2024 },
            { id: 16, title: "Modular group algebra with upper Lie nilpotency index 11p − 9", year: 2024, link: "https://as.yazd.ac.ir/article_3140.html" },
            { id: 17, title: "On the normal complement problem of finite group algebra", year: 2023, link: "https://www.worldscientific.com/doi/10.1142/S1793557123502029" },
            { id: 18, title: "On the Unit Group of Certain Finite Group Algebras", year: 2023 },
            { id: 19, title: "23rd Solar Cycle: Solar Activity Parameters and Associated Forbush Decreases", year: 2023, link: "https://linkinghub.elsevier.com/retrieve/pii/S027311772200984X" },
            { id: 20, title: "A new encryption scheme based on Legendre's transform", year: 2023 },
            { id: 21, title: "Quantum-defended Digital Signature on Lattice for IoT-enabled Systems", year: 2023, link: "https://link.springer.com/chapter/10.1007/978-981-19-9719-8_26" },
            { id: 22, title: "Comparison of Solar Activity Parameters and Associated Forbush Decreases in Solar Cycles 23 and 24", year: 2023, link: "https://link.springer.com/article/10.1007/s10509-022-04156-0" },
            { id: 23, title: "A note on modular group algebras with upper Lie nilpotency indices", year: 2022, link: "https://admjournal.luguniv.edu.ua/index.php/adm/article/view/1694" },
            { id: 24, title: "A comparison of Solar Cycle 23rd and 24th for Solar type II radio bursts associated with coronal mass ejection in relation to interplanetary features", year: 2022, link: "https://link.springer.com/article/10.1007/s10509-022-04156-0" },
            { id: 25, title: "Unit Groups of Group Algebras on Certain Quasidihedral Groups", year: 2022 },
            { id: 26, title: "The Structure of the Unit Group of a Group Algebra of a Group of Order 37", year: 2022 },
            { id: 27, title: "The Group of Units of Group Algebras of Abelian Groups of Order 36 and C₃ × A₄ over Any Finite Field", year: 2022, link: "https://doi.org/10.24330/ieja.1077623" },
            { id: 28, title: "Structure of Unit Group of Fₚⁿ D₆", year: 2021, link: "https://doi.org/10.1142/S1793557121500753" },
            { id: 29, title: "Unit Groups of Group Algebras of Abelian Groups of Order 32", year: 2021, link: "https://doi.org/10.22199/issn.0717-6279-4374" },
            { id: 30, title: "Modular Group Algebras with Small Upper Lie Nilpotency Index", year: 2020, link: "https://doi.org/10.1166/asem.2020.2517" },
            { id: 31, title: "Relationship Between Rising Phase of Solar Cycle 23rd and 24th with Respect to Geoeffectiveness", year: 2020, link: "https://doi.org/10.1166/asem.2020.2518" },
            { id: 32, title: "Group Algebras of Lie Nilpotency Index 14", year: 2020, link: "https://doi.org/10.1142/S1793557120500886" },
            { id: 33, title: "Solar flares associated coronal mass ejection accompanied with DH type II radio burst in relation with interplanetary magnetic field, geomagnetic storms and cosmic ray intensity", year: 2018, link: "https://doi.org/10.1016/j.newast.2017.10.001" },
            { id: 34, title: "Solar flare associated coronal mass ejections causing geo-effectiveness and Forbush decreases", year: 2017, link: "https://doi.org/10.1007/s10509-017-3024-0" },
            { id: 35, title: "Solar flares associated coronal mass ejections in case of type II radio bursts", year: 2016, link: "https://doi.org/10.1007/s10509-016-2857-2" },
            { id: 36, title: "Strongly Lie Nilpotent Group Algebras of Index at Most 8", year: 2014, link: "https://doi.org/10.1142/S0219498814500443" },
            { id: 37, title: "On Group Algebras with Unit Groups of Derived Length Three in Characteristic Three", year: 2013, link: "https://doi.org/10.5486/PMD.2013.5461" },
            { id: 38, title: "Lie Solvable Group Algebras of Derived Length Three in Characteristic Three", year: 2012, link: "https://doi.org/10.1142/S0219498812500983" },
            { id: 39, title: "Group Algebras with Unit Groups of Derived Length Three", year: 2010, link: "https://doi.org/10.1142/S0219498810003938" }
            // ... keep rest unchanged
          ].map(pub => (
            <tr
              key={pub.id}
              className="group border-b border-[#3C2F2B] transition-colors hover:bg-[#3C2F2B] hover:text-white"
            >
              <td className="py-4">{pub.id}</td>

              <td className="py-4">
                {pub.link ? (
                  <a
                    href={pub.link}
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span>{pub.title}</span>
                )}
              </td>

              {/* Year + Icon */}
              <td className="py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span>{pub.year}</span>

                  {pub.link && (
                    <span
                      className="
                        flex items-center justify-center
                        w-6 h-6 rounded-md
                        border border-[#3C2F2B]
                        text-[#3C2F2B]
                        cursor-pointer
                        group-hover:bg-white
                        group-hover:text-[#3C2F2B]
                        transition-colors
                      "
                    >
                      <ArrowUpRight size={14} />
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Publications;
