<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cycle;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Year;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalCyclesNumber = Cycle::count();
        $totalYearsNumber = Year::count();
        $totalSubjectsNumber = Subject::count();
        $totalStudentsNumber = Student::count();

        $totalCycles = [];
        $totalYears = [];
        $totalSubjects = [];
        $totalStudents = [];

        foreach (Cycle::latest()->limit(5)->get() as $cycle) {
            $totalCycles[] = $cycle->toArray() + [];
        }
        foreach (Year::latest()->limit(5)->get() as $year) {
            $totalYears[] = $year->toArray() + [];
        }
        foreach (Subject::latest()->limit(5)->get() as $subject) {
            $totalSubjects[] = $subject->toArray() + [];
        }
        foreach (Student::latest()->limit(5)->get() as $student) {
            $totalStudents[] = $student->toArray() + [];
        }

        return response()->json([
            'blocksData' => [
                'totalCycles' => $totalCyclesNumber,
                'totalYears' => $totalYearsNumber,
                'totalSubjects' => $totalSubjectsNumber,
                'totalStudents' => $totalStudentsNumber,
            ],

            'totalCycles' => $totalCycles,
            'totalYears' => $totalYears,
            'totalSubjects' => $totalSubjects,
            'totalStudents' => $totalStudents,
        ]);
    }
}
