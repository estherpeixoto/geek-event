<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateAboutRequest;
use App\Models\About;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $about = About::first();
        if (!empty($about->image)) {
            $about->image = asset("storage$about->image");
        }
        return response()->json($about);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAboutRequest $request, $id): JsonResponse
    {
        $about = About::findOrFail($id);

        if ($request->text) {
            $about->text = $request->text;
        }

        if ($request->image) {
            $filename = time() . '_' . $request->image->hashName();

            // Upload new image
            $request->file('image')->storePubliclyAs(
                'public/images',
                $filename
            );

            // Delete old image
            if ($about->image !== '') {
                Storage::delete("public/$about->image");
            }

            // Update field with new image
            $about->image = "/images/$filename";
        }

        if ($about->isDirty()) {
            if ($about->save()) {
                return response()->json([
                    'message' => 'Update successfully',
                    'about' => $about
                ]);
            }

            return response()->json(['message' => 'Fail to update'], 500);
        }

        return response()->json(['message' => 'Nothing to update']);
    }
}
