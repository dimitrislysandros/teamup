using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamUp.API.Migrations
{
    public partial class AddedTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EvnetTime",
                table: "Events",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EvnetTime",
                table: "Events");
        }
    }
}
