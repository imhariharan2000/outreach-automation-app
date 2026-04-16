<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Schema;

class CreateOutreachTable extends Migration
{
    public function up()
    {
        Schema::create('outreach', function (Blueprint $table) {
            $table->id();
            $table->string('campaign_name');
            $table->string('contact_email');
            $table->text('message');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('outreach');
    }
}