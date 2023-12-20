import { DataSociéte } from "../Data";


export default function Section1_Info() {
    return (
        <div className="border-2 border-gray-200 w-[35rem] mt-20 ml-[10%] p-10 mb-6 pl-10">
            <div className="text-[#fda50a] mb-4 ">ANTHEOR PARIS </div>
            <div className="text-xl font-semibold">Nous sommes spécialisés dans le rachat d'or,</div>
            <div className="text-xl font-semibold">d'argent && d'Antiquités, depuis plus 20 ans.</div>
            <div className="mt-8">

                {
                    DataSociéte && DataSociéte.map((item) => {
                        return (
                            <div className="flex gap-1  ">
                                <span className="mr-2">{item.svg}</span>
                                <span className="text-opacity-50">{item.Title}</span>
                            </div>
                        )
                    })
                }






            </div>
        </div>
    );
}