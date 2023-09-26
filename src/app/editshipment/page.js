"use client"

const editshipment = () => {
    return (
        <div className="bg-slate-200 flex min-h-screen flex-col items-center justify-between">
            <div className="bg-white w-1/3">
                <h1 className="text-center pt-5 text-2xl font-bold text-indigo-900">Edit Shipment</h1>
                <div className="flex flex-col p-6 font-bold">
                    <label className="my-2">Shipment ID</label>
                    <input type="number" className="border border-slate-300 rounded-lg h-12" />
                    <label className="my-2 font-bold">Customer Name</label>
                    <input type="text" className="border border-slate-300 rounded-lg h-12"/>
                    <label className="my-2 font-bold">Shipment Status</label>
                    <input type="text" className="border border-slate-300 rounded-lg h-12"/>
                    <label className="my-2 font-bold">Driver ID</label>
                    <input type="number" className="border border-slate-300 rounded-lg h-12"/>
                    <label className="my-2 font-bold">Actual Delivery Date</label>
                    <input type="date" className="border border-slate-300 rounded-lg h-12"/>
                    <label className="my-2 font-bold">Planned Delivwey Date</label>
                    <input type="date" className="border border-slate-300 rounded-lg h-12"/>

                    <button className="bg-indigo-700 my-7 border-2 rounded-lg text-white py-3 hover:bg-indigo-800 hover:font-extrabold">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default editshipment;