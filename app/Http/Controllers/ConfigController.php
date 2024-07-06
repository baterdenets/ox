<?php

namespace App\Http\Controllers;

use App\Models\Config;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    public function index(Request $request)
    {
        $query = Config::query();

        if ($request->has('search')) {
            $query->where('code', 'like', '%' . $request->search . '%')
                  ->orWhere('value', 'like', '%' . $request->search . '%');
        }

        $products = $query->get();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'code'=>'required',
            'value'=> 'required']
            );
        $config = Config::create($validatedData);
        return response()->json($config);
    }
            
}

