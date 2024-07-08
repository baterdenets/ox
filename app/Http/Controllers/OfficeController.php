<?php

namespace App\Http\Controllers;

use App\Models\Office;
use Illuminate\Http\Request;

class OfficeController extends Controller
{
    public function index(Request $request)
    {
        $query = Office::query();

        if ($request->has('search')) {
            $query->where('office_name', 'like', '%' . $request->search . '%')->paginate(10);
        }

        $list = $query->get();
        $count = $query->count();
        $pages = ceil($count / 10);

        return response()->json(['list'=>$list,'count'=>$count,'pages'=>$pages]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'corp_id'=>'required',
            'office_name'=>'required',
            'name' => 'required', ]
            );
        $validatedData['corp_id'] = 1;
        $data = Office::create($validatedData);
        return response()->json($data);
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required', 
            'office_name' => 'required', 
            'name' => 'required', 
        ]);


        $data = Office::find($validatedData['id']);
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

        $data = Office::where($validatedData)->first(); 

        if ($data) {
            $data->delete();
            return response()->json(['message' => 'Config deleted successfully']);
        } else {
            return response()->json(['error' => 'Config not found'], 404); // Handle missing config
        }
    }
            
}

