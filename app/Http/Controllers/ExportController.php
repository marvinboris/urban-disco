<?php

namespace App\Http\Controllers;

use App\Exports\Export;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Facades\Excel as FacadesExcel;

class ExportController extends Controller
{
    //
    public function xlsx(Request $request)
    {
        $name = $request->name;
        $data = json_decode($request->data, true);

        // $data = $data['data'];

        return FacadesExcel::download(new Export($data), $name . '.xlsx', Excel::XLSX);
    }
    
    public function csv(Request $request)
    {
        $name = $request->name;
        $data = json_decode($request->data, true);

        // $data = $data['data'];

        return FacadesExcel::download(new Export($data), $name . '.xlsx', Excel::CSV, [
            'Content-Type' => 'text/csv',
        ]);
    }
    
    public function pdf(Request $request)
    {
        $name = $request->name;
        $data = json_decode($request->data, true);

        // $data = $data['data'];

        return FacadesExcel::download(new Export($data), $name . '.xlsx', Excel::DOMPDF);
    }
}
