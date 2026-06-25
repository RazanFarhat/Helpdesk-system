<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Notification;

class TicketController extends Controller
{
    public function index()
    {
        return Ticket::with([
            'category',
            'priority',
            'status'
        ])->get();
    }

    public function show($id)
    {
        return Ticket::findOrFail($id);
    }

    public function store(Request $request)
    {
        $attachmentPath = null;

        if ($request->hasFile('attachment')) {
            $attachmentPath = $request
                ->file('attachment')
                ->store('attachments', 'public');
        }

        $ticket = Ticket::create([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'priority_id' => $request->priority_id,
            'status_id' => $request->status_id,
            'attachment' => $attachmentPath,
        ]);

        Notification::create([
            'message' => 'Ticket "' . $ticket->title . '" was created'
        ]);

        return response()->json($ticket);
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::findOrFail($id);
        
         $ticket->update([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'priority_id' => $request->priority_id,
            'status_id' => $request->status_id,
        ]);

        Notification::create([
            'message' => 'Ticket "' . $ticket->title . '" was updated'
        ]);

        $ticket->load('category', 'priority', 'status');

        return response()->json($ticket);
    }                                                                                                                                                                                                                                                  

    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);                                                                                                                                                                                                                                                              

        Notification::create([
            'message' => 'Ticket "' . $ticket->title . '" was deleted'
        ]);

        $ticket->delete();

        return response()->json([
            'message' => 'Ticket deleted successfully'
        ]);
    }
}