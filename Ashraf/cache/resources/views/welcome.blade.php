<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
<body>
    <h1 class="text-center mt-5">Cache Tutorial</h1>
    <hr>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6 ">
                <table class="table">
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                    </tr>
                    @foreach ($products as $product)
                        <tr>
                            <td>{{ $loop->index  +1 }}</td>
                            <td>{{ $product->name }}</td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </div>

</body>
</html>
