<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return response()->json(Faq::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $createdFaq = Faq::create([
            'question' => $request->question,
            'answer' => $request->answer
        ]);

        if ($createdFaq) {
            return response()->json([
                'message' => 'Created successfully',
                'faq' => $createdFaq
            ]);
        }

        return response()->json(['message' => 'Fail to create'], 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): JsonResponse
    {
        return response()->json(Faq::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id): JsonResponse
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
     */
    public function destroy(int $id): JsonResponse
    {
        if (Faq::destroy($id)) {
            return response()->json(['message' => 'Destroyed successfully']);
        }

        return response()->json(['message' => 'Fail to destroy']);
    }
}
