import { Activity } from "react-feather";

type TransactionType = {
  id: number;
  type: string;
  subject: string;
  nominal: number;
  status: boolean;
  category: string;
  date: string;
};

type Props = {
  data: {
    id: number;
    date: string;
    transaction: TransactionType[];
  };
};

const TransactionCard = ({ data }: Props) => {
  return (
    <div className="w-full h-fit">
      <h1 className="font-semibold text-gray-300 text-sm">{data.date}</h1>
      <div className="w-full mt-2 mb-3">
        {data.transaction.map((result) => (
          <div key={result.id} className="w-full px-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2 justify-start">
                <Activity size={14} />
                <p className="font-semibold capitalize text-sm">
                  {result.category}
                </p>
              </div>
              <p className="text-sm font-bold">Rp {result.nominal}</p>
            </div>
            <div className="w-full my-2 flex justify-between mt-2">
              <p className="h-10 text-sm w-2/3">
                {result.type == "add" ? (
                  <span>
                    Transaction Added from{" "}
                    <span className="font-medium">{result.subject}</span>
                  </span>
                ) : (
                  <span>
                    Transaction Remove for{" "}
                    <span className="font-medium">{result.subject}</span>
                  </span>
                )}
              </p>
              <p className="w-1/3 text-sm text-end font-medium">
                {result.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionCard;
