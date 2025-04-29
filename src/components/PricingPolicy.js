import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function PricingPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/"
          className="inline-block bg-[#908785] text-white px-4 py-2 rounded-md shadow hover:bg-[#7a716f] transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Tenant Charges – For Tenancy Contracts Signed On Or After 1 June 2019</h1>
      <p className="mb-4">
        We believe in transparency and fairness. Below are the maximum fees you may be charged during your tenancy (all fees include VAT). Charges vary depending on your circumstances. For accurate details, please contact your local branch.
      </p>

      <table className="w-full border border-gray-300 mb-6 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Service</th>
            <th className="border px-4 py-2 text-left">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Contract Changes</td>
            <td className="border px-4 py-2">£50.00 to make changes or add a tenant. If it costs more, you’ll receive an itemised invoice.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Key/Lock Replacement</td>
            <td className="border px-4 py-2">Charged at the actual cost of replacing lost keys, locks, remote controls, or security devices.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Cleaning</td>
            <td className="border px-4 py-2">Charged for any cleaning required due to tenant negligence, either during the tenancy or at its end.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Late Exit</td>
            <td className="border px-4 py-2">Charged for any reasonable costs if you leave later than agreed.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Early Exit</td>
            <td className="border px-4 py-2">Pay rent until re-let or term ends, plus £50 early exit fee and reletting costs. You may also lose part of your deposit.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Late Rent</td>
            <td className="border px-4 py-2">3% interest above the Bank of England base rate from 14 days overdue, backdated to the due date.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Damages or Tenant Faults</td>
            <td className="border px-4 py-2">Charged for tenant-caused damage or issues, including unnecessary contractor call-outs.</td>
          </tr>
        </tbody>
      </table>

      <p className="text-[#000] font-semibold">Tenant:</p>
      <ul className="list-disc ml-6 mt-2 text-sm">
        <li>No charges for simply renting a property.</li>
        <li>£50 fee for any agreed changes to the tenancy terms.</li>
      </ul>
    </div>
  );
}

export default PricingPolicy;
