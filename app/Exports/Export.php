<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;

class Export implements FromArray
{
    private $content;

    public function __construct($content)
    {
        $this->content = $content;
    }

    public function array(): array
    {
        return $this->content;
    }
}
