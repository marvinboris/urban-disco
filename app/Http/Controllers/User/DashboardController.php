<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Models\Subject;
use App\Models\PlanRestaurant;
use App\Models\Recharge;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalRestaurantsNumber = 0;
        $totalPlansNumber = 0;
        $totalPlansAmount = 0;
        $totalRechargesAmount = 0;

        $totalRestaurants = [];
        $totalPlans = [];
        $totalRecharges = [];

        $financeTrackerData = [];

        return response()->json([
            'blocksData' => [
                'totalRestaurants' => $totalRestaurantsNumber,
                'totalPlans' => $totalPlansNumber,
                'totalPlansAmount' => number_format($totalPlansAmount, 2),
                'totalRecharges' => $totalRechargesAmount,
            ],

            'totalRestaurants' => $totalRestaurants,
            'totalPlans' => $totalPlans,
            'totalRecharges' => $totalRecharges,
            'financeTrackerData' => $financeTrackerData,
        ]);
    }
}
