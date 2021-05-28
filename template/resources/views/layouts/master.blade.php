@extends('layouts.app')
@section('title')
Master
@stop
@push('css')
Lorem ipsum dolor sit.
@endpush
@section('app_content')
@includeIf('partials.navbar')

  @includeIf('partials.sidebar')

      <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        @yield('master_content')
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  </div>

  @includeIf('partials.footer')
@endsection
