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
                  ->orWhere('value', 'like', '%' . $request->search . '%')->paginate(10);
        }

        $configs = $query->get();
        $count = $query->count();
        $pages = ceil($count / 10);

        return response()->json(['list'=>$configs,'count'=>$count,'pages'=>$pages]);
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

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required', 
            'code' => 'required', 
            'value' => 'required', 
        ]);


        $config = Config::find($validatedData['id']);
        if ($config) {
            $config->update($validatedData);
            return response()->json($config);
        } else {
            return response()->json(['error' => 'Config not found'], 404);
        }
    }

    public function delete(Request $request)
    {
        $validatedData = $request->validate([
            'code' => 'required|string', 
            'value' => 'optional', 
        ]);

        $config = Config::where($validatedData)->first(); 

        if ($config) {
            $config->delete();
            return response()->json(['message' => 'Config deleted successfully']);
        } else {
            return response()->json(['error' => 'Config not found'], 404); // Handle missing config
        }
    }
            
}

