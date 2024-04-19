import { Table } from '@radix-ui/themes'
import won from "../../assets/won.jpg"

export default function TableRow({title,teams,tips,result}:any) {
  return (
    <>
      <Table.Row className="shadow-sm">
        <Table.RowHeaderCell>{title}</Table.RowHeaderCell>
        <Table.Cell>{teams}</Table.Cell>
        <Table.Cell>{tips}</Table.Cell>
        <Table.Cell>
          {result == "WON" ? (
            <img src={won} className="w-6 h-auto " />
          ) : result == "LOST" ? (
            <p className="text-red-500 text-lg font-[500] ml-2">x</p>
          ) : (
            <p className="text-gray-300 text-lg font-[500] ml-2">o</p>
          )}
        </Table.Cell>
      </Table.Row>

    </>
  );
}
