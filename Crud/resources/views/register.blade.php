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
    <h3 class="text-center">Register</h3>
    <a href="{{ route('show.login') }}" class="btn btn-info">Login</a>
    <div class="row mt-5 justify-content-center">
        <div class="col-10">
<form action="{{ route('register') }}" method="POST">
    @csrf
    <div class="form-group">
        <label for="">name</label>
        <input type="text" class="form-control" name="name" placeholder="name name" value="{{ old('name') }}">
        @error('name')
        <span class="text-danger">{{ $message }}</span>
        @enderror
    </div>
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
    <button class="btn btn-sm btn-success">Register</button>
</form>
        </div>
    </div>
</div>
</body>
</html>
