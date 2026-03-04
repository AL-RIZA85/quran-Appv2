import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CardComp({ item }) {
    return (
        <Link to={`/surat/${item.nomor}`}>
            <Card
                className="max-w-sm">
                <h5>{item.namaLatin}</h5>
                <span>{item.arti}</span>
                <span>{item.nama}</span>
                <span>{item.tempatTurun}</span>
                <span>{item.jumlahAyat}</span>
            </Card>
        </Link>

    );
}