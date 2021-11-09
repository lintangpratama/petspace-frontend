import Head from "next/head";
import Back from '@/components/Back';


export default function Cat() {
  const name = 'Lintang';

  return (
    <div className="flex flex-col">
      <Head>
        <title>PetSpace - Cariin Tempat Penitipan Hewan Buat Kamu</title>
        <link rel="icon" href="/petspace.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      
      <body className="">
        <div className="h-full bg-gray-100">
          <div className="block box-border bg-white max-w-md w-full mx-auto h-full">
            <div className="flex flex-col h-screen">
              <div className="mx-5 my-10">
                <Back />

                <div className="mt-10">
                  <h1 className="font-normal font-main text-blue-main text-2xl">
                    Space Status
                  </h1>
                  <p className="text-sm font-serif text-gray-500 mt-2">
                    Kamu bisa melihat status penitipan hewanmu di sini
                  </p>
                </div>

                <div className="flex flex-col bg-card-status bg-auto justify-center rounded-xl items-center text-center px-4 py-7 mt-10 md:py-10">
                  <img
                    src="/status-card/cat-status.png"
                    className="w-40 md:w-52"
                  ></img>
                  <div className="flex flex-col w-9/12 justify-between">
                    <h2 className="text-white font-semibold md:text-base text-center" style={{fontSize: "25px"}}>
                      Kitty
                    </h2>
                    <div className="text-base text-center font-serif text-white w-full my-6">
                      <p>Lintang Aji Yoga Pratama</p>
                      <p>19 Oktober 2021 - 6 November 2021</p>
                      <p>Status: Accepted</p>
                    </div>

                    <button className="py-2.5 w-36 text-white font-medium bg-yellow-pet rounded-xl mt-3 md:text-sm mx-auto" style={{fontSize: "15px", width: "180px"}}>
                      <a href={`https://api.whatsapp.com/send?phone=6285591639594&text=Test${name}`}>Chat via WhatsApp</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
