<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(Request $request)
    {
        $request->validate([
            'password' => ['required'],
            'email' => ['required']
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->route('category.index');
        } else {
            return back()->with('err', 'Invalid');
        }
        return $request->all();
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required']
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return redirect()->route('show.login');
    }

    function logout()
    {
    }

    function showLogin()
    {
        return view('login');
    }

    function showRegister()
    {
        return view('register');
    }
}
