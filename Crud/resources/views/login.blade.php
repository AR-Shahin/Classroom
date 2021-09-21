<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" >
    <title>Document</title>
</head>
<body>
<div class="container">
    <h3 class="text-center">Login</h3>
    @if (session()->has('err'))
        {{ session()->get('err') }}
    @endif
    <a href="{{ route('show.register') }}" class="btn btn-info">Register</a>
    <div class="row mt-5 justify-content-center">
        <div class="col-10">
<form action="{{ route('login') }}" method="POST">
    @csrf
    <div class="form-group">
        <label for="">Email</label>
        <input type="text" class="form-control" name="email" placeholder="Email email" value="{{ old('email') }}">
        @error('email')
        <span class="text-danger">{{ $message }}</span>
        @enderror
    </div>
    <div class="form-group">
        <label for="">password</label>
        <input type="text" class="form-control" name="password" placeholder="password password" value="{{ old('password') }}">
        @error('password')
        <span class="text-danger">{{ $message }}</span>
        @enderror
    </div>
    <br>
    <button class="btn btn-sm btn-success">Login</button>
</form>
        </div>
    </div>
</div>
</body>
</html>
