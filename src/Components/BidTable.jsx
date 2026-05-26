
const BidTable = ({Bids}) => {
    console.log(Bids)
    // const {buyer_image,buyer_name,buyer_contact,buyer_email,bid_price,status}=Bids
    // console.log({buyer_image,buyer_name,buyer_contact,buyer_email,bid_price,status})
    return (
        <div>
                <div className="min-h-screen  flex items-center justify-center  ">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-4xl overflow-hidden">

        {/* Header */}
        {/* <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-800 tracking-tight">
            Bid Offers
          </h2>
          <span className="text-xs font-semibold bg-indigo-50 text-indigo-500 px-2.5 py-0.5 rounded-full">
            1 Pending
          </span>
        </div> */}

        {/* Table */}
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">SL No</th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">Buyer</th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">Contact</th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">Bid Price</th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">Status</th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-widest px-5 py-3">Actions</th>
            </tr>
          </thead>
        </table>
{
    Bids.map((bid,index) =>           <tbody>
            <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">

              {/* SL */}
              <td className="px-5 py-4 text-sm font-semibold text-slate-300 w-12">{index+1}</td>

              {/* Buyer */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={bid.buyer_image}
                    alt="Farhan Zaki"
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-50"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{bid.buyer_name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{bid.buyer_email}</p>
                  </div>
                </div>
              </td>

              {/* Contact */}
              <td className="px-5 py-4 text-xs font-medium text-indigo-400">
                {bid.buyer_contact}
              </td>

              {/* Bid Price */}
              <td className="px-5 py-4 text-base font-bold text-slate-800 tracking-tight">
     ${bid.bid_price}              </td>

              {/* Status */}
              <td className="px-5 py-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full capitalize bg-amber-50 text-amber-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {bid.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-5 py-4">
                <div className="flex gap-2">
                  <button className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
                    Accept Offer
                  </button>
                  <button className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all">
                    Reject Offer
                  </button>
                </div>
              </td>

            </tr>
          </tbody>
)
}
      </div>
    </div>

        </div>
    );
};

export default BidTable;