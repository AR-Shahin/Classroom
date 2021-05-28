<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){

        $products = cache('products', function () {
            return Product::latest()->get();
        });
        return view('welcome', [
            'products' => $products
        ]);
    }
}

