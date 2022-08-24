<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;
use Inertia\Inertia;
use Inertia\Response;

class DocsController extends Controller
{
    public function index($page): Response
    {
        $locale = Config::get('app.locale');
        $path = resource_path("/docs/$locale/$page.md");

        if (!file_exists($path)) {
            return abort(
                \Symfony\Component\HttpFoundation\Response::HTTP_NOT_FOUND,
                'Inexistent file'
            );
        }

        return Inertia::render('Admin/Documentation', [
            'markdown' => file_get_contents($path)
        ]);
    }
}
