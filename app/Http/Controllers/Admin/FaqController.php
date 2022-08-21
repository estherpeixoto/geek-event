<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Faq::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(
            Faq::create([
                'question' => $request->question,
                'answer' => $request->answer
            ])
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Faq::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $faq = Faq::findOrFail($id);

        if ($request->question) {
            $faq->question = $request->question;
        }

        if ($request->answer) {
            $faq->answer = $request->answer;
        }

        if ($faq->isDirty()) {
            if ($faq->save()) {
                return response()->json([
                    'message' => 'Update successfully',
                    'faq' => $faq
                ]);
            }

            return response()->json(['message' => 'Fail to update'], 500);
        }

        return response()->json(['message' => 'Nothing to update']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Faq::destroy($id)) {
            return response()->json(['message' => 'Destroyed successfully']);
        }

        return response()->json(['message' => 'Fail to destroy']);
    }
}
