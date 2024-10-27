import data from '../data.json'; 

export default function Membres() {
   
    return (
        <div className="overflow-x-auto font-jura mx-20 mt-8">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right bg-arianBord/10">
                    <tr className='text-lg '>
                        <th className="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">
                            Nom
                        </th>
                        <th className="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">
                            Prénom
                        </th>
                        <th className="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">
                            Fonction 
                        </th>
                        <th className="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">
                            Ville
                        </th>
                        <th className="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">
                            Labo
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {data.map((membre) => (
                        <tr key={membre.id} className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {membre.Nom}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{membre.Prenom}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{membre.Fonction}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{membre.Ville}</td>
                           <td className="whitespace-nowrap px-4 py-2 text-gray-700">{membre.Labo ? membre.Labo: <td className='italic'>Non renseigné</td>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
