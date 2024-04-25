<script>
   import Nav from '../../components/Nav.svelte'
import { onMount } from "svelte";
let datee;
let bookingDetails = [];
onMount(async() => {
    let usernamee = localStorage.getItem("username");
    const check = await fetch("http://localhost:4000/bookingdetails/" + usernamee );
    let ans = await check.json();

    bookingDetails = ans;
    console.log(ans);
    datee = bookingDetails[0].date;
    let currentDate = new Date(datee);
    currentDate.setDate(currentDate.getDate() + 1);
    datee = currentDate.toISOString().slice(0, 10);
    console.log(datee);
});
</script>
<main>
    <Nav />
    {#if bookingDetails.length!=0}
    <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Artist Name</th>
              <th>Date of Booking</th>
              <th>Amount Paid</th>
              <th>Rating of Artist</th>
            </tr>
          </thead>
          <tbody>
            {#each bookingDetails as booking}
              <tr>
                <td>{booking.name}</td>
                <td>{datee}</td>
                <td>{booking.amt_paid}</td>
                <td>{booking.rating}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      {/if}
</main>
<style>

</style>