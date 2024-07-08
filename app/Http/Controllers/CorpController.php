<?php

namespace App\Http\Controllers;

use App\Models\Corp;
use Illuminate\Http\Request;

class CorpController extends Controller
{
    public function index(Request $request)
    {
        $query = Corp::query();

        if ($request->has('search')) {
            $query->where('corp_name', 'like', '%' . $request->search . '%')->paginate(10);
        }

        $list = $query->get();
        $count = $query->count();
        $pages = ceil($count / 10);

        return response()->json(['list'=>$list,'count'=>$count,'pages'=>$pages]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'corp_name'=>'required']
            );
        
        $data = Corp::create($validatedData);
        return response()->json($data);
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required', 
            'corp_name' => 'required', 
        ]);


        $data = Corp::find($validatedData['id']);
        if ($data) {
            $data->update($validatedData);
            return response()->json($data);
        } else {
            return response()->json(['error' => 'Config not found'], 404);
        }
    }

    public function delete(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required'
        ]);

        $data = Corp::where($validatedData)->first(); 

        if ($data) {
            $data->delete();
            return response()->json(['message' => 'Config deleted successfully']);
        } else {
            return response()->json(['error' => 'Config not found'], 404); // Handle missing config
        }
    }
            
}

