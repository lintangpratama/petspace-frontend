import Head from "@/components/Head";
import BarPetCare from "@/components/BarPetCare";


export default function Help() {
  return (
    <div className="flex flex-col">
      <Head />
      <body className="font-body">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col">
              <div className="mx-5 my-10 h-screen">
                {/* Mulai ngoding di sini */}
                {/* Title */}
                <div className="font-normal font-main text-gray-900 text-2xl">
                  Bantuan
                </div>
                
                <p className="text-sm font-secondary text-gray-500 mt-3">
                  Kamu butuh bantuan? Lihatlah beberapa daftar pertanyaan
                  berikut
                </p>

                <div className="pt-7"></div>
                <div className="collapse border rounded-box border-base-300 collapse-arrow font-secondary w-full mt-4 py-0">
                  <input type="checkbox" />
                  <div className="collapse-title">
                    Apa itu PetSpace?
                  </div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="collapse border rounded-box border-base-300 collapse-arrow font-secondary w-full mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title text-md">
                    Mengapa kami membangun PetSpace?
                  </div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      Kami memahami bahwa hewanmu merupakan hal yang sangat
                      berharga bagimu. Kami membangun PetSpace dengan tujuan
                      untuk membantumu untuk mencari tempat penitipan hewan yang
                      aman dan nyaman saat kamu sedang tidak memiliki waktu untuk
                      menjaga hewanmu. Harapan kami, PetSpace bisa memudahkanmu
                      mencari tempat penitipan hewan dengan fasilitas yang kamu
                      inginkan.
                    </p>
                  </div>
                </div>
                <div className="collapse border rounded-box border-base-300 collapse-arrow font-secondary w-full mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title text-md">
                    Produk & Layanan
                  </div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      Isi dari produk dan layanan
                    </p>
                  </div>
                </div>
                <div className="collapse border rounded-box border-base-300 collapse-arrow font-secondary w-full mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title text-md">
                    Bagaimana prosedur penitipan hewan di PetSpace?
                  </div>
                  <div className="collapse-content ">
                    <p className="text-sm">
                      Kami memahami bahwa hewanmu merupakan hal yang sangat
                      berharga bagimu. Kami membangun PetSpace dengan tujuan
                      untuk membantumu untuk mencari tempat penitipan hewan yang
                      aman dan nyaman saat kamu sedang tidak memiliki waktu untuk
                      menjaga hewanmu. Harapan kami, PetSpace bisa memudahkanmu
                      mencari tempat penitipan hewan dengan fasilitas yang kamu
                      inginkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <BarPetCare currentPage="help" />
          </div>
        </div>
      </body>
    </div>
  );
}
